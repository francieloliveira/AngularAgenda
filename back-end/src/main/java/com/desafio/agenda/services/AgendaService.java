package com.desafio.agenda.services;


import com.desafio.agenda.repositories.AgendaRepository;
import com.desafio.agenda.models.AgendaModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.UUID;

@Service
public class AgendaService {

    @Autowired
    private AgendaRepository agendaRepository;

    @Transactional
    public AgendaModel save(AgendaModel agendaModel) {return agendaRepository.save(agendaModel);}
    @Transactional
    public void deleteItem(AgendaModel agendaModel) {
        agendaRepository.delete(agendaModel);
    }
    public boolean existsByCpf(String cpf) {return agendaRepository.existsByCpf(cpf);}
    public boolean existsByCnpj(String cnpj) {return agendaRepository.existsByCnpj(cnpj);}
    public Page<AgendaModel> findAll(Pageable pageable) {
        return agendaRepository.findAll(pageable);
    }
    public Optional<AgendaModel> findById(UUID id) {
        return agendaRepository.findById(id);
    }
    public Page<AgendaModel> findByNomeContaining(String nome, Pageable pageable) {return agendaRepository.findByNomeContaining(nome, pageable);}
    public Optional<AgendaModel> findByCpf(String cpf) {return agendaRepository.findByCpf(cpf);}
    public Optional<AgendaModel> findByCnpj(String cnpj) {return agendaRepository.findByCnpj(cnpj);}

}
