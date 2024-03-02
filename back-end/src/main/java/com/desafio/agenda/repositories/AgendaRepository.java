package com.desafio.agenda.repositories;

import com.desafio.agenda.models.AgendaModel;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface AgendaRepository extends JpaRepository<AgendaModel, UUID> {

    boolean existsByCpf(String cpf);

    boolean existsByCnpj(String cnpj);

    Page<AgendaModel> findAll(Pageable pageable);

    Optional<AgendaModel> findById(UUID id);

    Optional<AgendaModel> findByCpf(String cpf);

    Optional<AgendaModel> findByCnpj(String cnpj);

    Page<AgendaModel> findByNomeContaining(String nome, Pageable pageable);

}
