package com.desafio.agenda.controllers;

import com.desafio.agenda.dtos.AgendaDto;
import com.desafio.agenda.services.AgendaService;
import com.desafio.agenda.utils.ValidatorCpfCnpj;
import jakarta.validation.Valid;
import com.desafio.agenda.models.AgendaModel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/agenda")
public class AgendaController {

    final AgendaService agendaService;
    private static final Logger logger = LoggerFactory.getLogger(AgendaController.class);

    public AgendaController(AgendaService agendaService) {
        this.agendaService = agendaService;
    }

    /**
     * Este método cria um contato na agenda.
     * @param agendaDto
     * @return ResponseEntity
     */
    @PostMapping
    public ResponseEntity<Object> createContact(@RequestBody @Valid AgendaDto agendaDto) {
        try {
            if (agendaDto.getCpf() == null && agendaDto.getCnpj() == null) {
                return ResponseEntity.badRequest().body("CPF ou CNPJ é obrigatório");
            }

            // Validação de CPF
            if (agendaDto.getCpf() != null) {
                if (agendaService.existsByCpf(agendaDto.getCpf())) {
                    if (!ValidatorCpfCnpj.isValidCPF(agendaDto.getCpf())) {
                        return ResponseEntity.badRequest().body("CPF inválido");
                    }
                    return ResponseEntity.status(HttpStatus.CONFLICT).body("O CPF já existe");
                }
            }

            // Validação de CNPJ
            if (agendaDto.getCnpj() != null) {
                if (agendaService.existsByCnpj(agendaDto.getCnpj())) {
                    if (!ValidatorCpfCnpj.isValidCNPJ(agendaDto.getCnpj())) {
                        return ResponseEntity.badRequest().body("CNPJ inválido");
                    }
                    return ResponseEntity.status(HttpStatus.CONFLICT).body("O CNPJ já existe");
                }
            }

            // Validação da Data de Nascimento
            if (agendaDto.getDataNascimento() == null) {
                return ResponseEntity.badRequest().body("Data de nascimento é obrigatória");
            }

            var agendaModel = new AgendaModel();
            BeanUtils.copyProperties(agendaDto, agendaModel);
            return ResponseEntity.status(HttpStatus.CREATED).body(agendaService.save(agendaModel));

        } catch (Exception e) {
            logger.error("Erro inesperado ao salvar contato", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao salvar contato");
        }
    }

    /**
     * Recupera tdo o conteúdo paginado da agenda.
     * @param pageable
     * @return ResponseEntity
     */
    @GetMapping
    public ResponseEntity<Object> getPaginatedContacts(@PageableDefault(page = 0, size = 10, sort = "id", direction = Sort.Direction.ASC) Pageable pageable) {
        Page<AgendaModel> agendaPage = agendaService.findAll(pageable);
        if (agendaPage.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body("A agenda está vazia.");
        }
        return ResponseEntity.status(HttpStatus.OK).body(agendaPage);
    }

    /**
     * Recupera um único contato da agenda.
     * @param id
     * @return ResponseEntity
     */
    @GetMapping("/{id}")
    public ResponseEntity<Object> getContactById(@PathVariable(value = "id") UUID id) {
        Optional<AgendaModel> agendaModelOptional = agendaService.findById(id);
        if (!agendaModelOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Contato não existe!");
        }

        AgendaModel agendaModel = agendaModelOptional.get();

        var agendaDto = new AgendaDto();
        BeanUtils.copyProperties(agendaModel, agendaDto);

        logger.info("DTO: {}", agendaDto);

        return ResponseEntity.status(HttpStatus.OK).body(agendaDto);
    }

    /**
     * Realiza a Busca por nome
     * @param nome
     * @param pageable
     * @return
     */
    @GetMapping("/search")
    public ResponseEntity<Object> searchContactsByName(
            @RequestParam("nome") String nome,
            @PageableDefault(page = 0, size = 10, sort = "id", direction = Sort.Direction.ASC) Pageable pageable) {
        Page<AgendaModel> agendaPage = agendaService.findByNomeContaining(nome, pageable);
        if (agendaPage.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Nenhum contato encontrado.");
        }
        return ResponseEntity.status(HttpStatus.OK).body(agendaPage);
    }



    /**
     * Atualiza, se existir, um contato da agenda.
     * @param id
     * @param agendaDto
     * @return ResponseEntity
     */
    @PutMapping("/{id}")
    public ResponseEntity<Object> updateContact(@PathVariable(value = "id") UUID id, @RequestBody @Valid AgendaDto agendaDto) {
        Optional<AgendaModel> agendaModelOptional = agendaService.findById(id);
        if (!agendaModelOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Contato não existe.");
        }
        var agendaModel = agendaModelOptional.get();
        BeanUtils.copyProperties(agendaDto, agendaModel);
        agendaModel.setId(agendaModelOptional.get().getId());
        return ResponseEntity.status(HttpStatus.OK).body(agendaService.save(agendaModel));
    }

    /**
     * Exclui, se existir, um contato da agenda.
     * @param id
     * @return ResponseEntity
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteContact(@PathVariable(value = "id") UUID id) {
        Optional<AgendaModel> agendaModelOptional = agendaService.findById(id);
        if (!agendaModelOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Contato não existe.");
        }
        agendaService.deleteItem(agendaModelOptional.get());
        return ResponseEntity.status(HttpStatus.OK).body("Contato excluído com sucesso!");
    }
}