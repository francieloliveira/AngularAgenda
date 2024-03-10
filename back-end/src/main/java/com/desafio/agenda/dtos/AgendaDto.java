package com.desafio.agenda.dtos;

import com.desafio.agenda.models.AgendaModel;

import java.io.Serializable;
import java.util.Date;
import java.util.Objects;
import java.util.UUID;

/**
 * DTO for {@link AgendaModel}
 */
public class AgendaDto implements Serializable {
    private UUID id;
    private String nome;
    private String cpf;
    private String cnpj;
    private String email;
    private String telefone;
    private Date dataNascimento;
    private String cep;
    private String logradouro;
    private String numero;
    private String complemento;
    private String bairro;
    private String localidade;
    private String uf;

    public AgendaDto(UUID id, String nome, String cpf, String cnpj, String email, String telefone, Date dataNascimento, String cep, String logradouro, String numero, String complemento, String bairro, String localidade, String uf) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.cnpj = cnpj;
        this.email = email;
        this.telefone = telefone;
        this.dataNascimento = dataNascimento;
        this.cep = cep;
        this.logradouro = logradouro;
        this.numero = numero;
        this.complemento = complemento;
        this.bairro = bairro;
        this.localidade = localidade;
        this.uf = uf;
    }

    public AgendaDto() {
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public Date getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(Date dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public String getLogradouro() {
        return logradouro;
    }

    public void setLogradouro(String logradouro) {
        this.logradouro = logradouro;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public String getComplemento() {
        return complemento;
    }

    public void setComplemento(String complemento) {
        this.complemento = complemento;
    }

    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

    public String getLocalidade() {
        return localidade;
    }

    public void setLocalidade(String localidade) {
        this.localidade = localidade;
    }

    public String getUf() {
        return uf;
    }

    public void setUf(String uf) {
        this.uf = uf;
    }

    public String getCep() {return cep;}

    public void setCep(String cep) {this.cep = cep;}

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AgendaDto agendaDto = (AgendaDto) o;
        return Objects.equals(id, agendaDto.id) && Objects.equals(nome, agendaDto.nome) && Objects.equals(cpf, agendaDto.cpf) && Objects.equals(cnpj, agendaDto.cnpj) && Objects.equals(email, agendaDto.email) && Objects.equals(telefone, agendaDto.telefone) && Objects.equals(dataNascimento, agendaDto.dataNascimento) && Objects.equals(cep, agendaDto.cep) && Objects.equals(logradouro, agendaDto.logradouro) && Objects.equals(numero, agendaDto.numero) && Objects.equals(complemento, agendaDto.complemento) && Objects.equals(bairro, agendaDto.bairro) && Objects.equals(localidade, agendaDto.localidade) && Objects.equals(uf, agendaDto.uf);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nome, cpf, cnpj, email, telefone, dataNascimento, cep, logradouro, numero, complemento, bairro, localidade, uf);
    }

    @Override
    public String toString() {
        return "AgendaDto{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", cpf='" + cpf + '\'' +
                ", cnpj='" + cnpj + '\'' +
                ", email='" + email + '\'' +
                ", telefone='" + telefone + '\'' +
                ", dataNascimento=" + dataNascimento +
                ", cep=" + cep +
                ", logradouro='" + logradouro + '\'' +
                ", numero='" + numero + '\'' +
                ", complemento='" + complemento + '\'' +
                ", bairro='" + bairro + '\'' +
                ", localidade='" + localidade + '\'' +
                ", uf='" + uf + '\'' +
                '}';
    }
}