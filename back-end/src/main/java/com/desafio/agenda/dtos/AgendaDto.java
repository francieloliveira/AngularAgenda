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
    private String logradouro;
    private String numero;
    private String complemento;
    private String bairro;
    private String localidade;
    private String uf;

    public AgendaDto(UUID id, String nome, String cpf, String cnpj, String email, String telefone, Date dataNascimento, String logradouro, String numero, String complemento, String bairro, String localidade, String uf) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.cnpj = cnpj;
        this.email = email;
        this.telefone = telefone;
        this.dataNascimento = dataNascimento;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof AgendaDto agendaDto)) return false;
        return Objects.equals(getId(), agendaDto.getId()) && Objects.equals(getNome(), agendaDto.getNome()) && Objects.equals(getCpf(), agendaDto.getCpf()) && Objects.equals(getCnpj(), agendaDto.getCnpj()) && Objects.equals(getEmail(), agendaDto.getEmail()) && Objects.equals(getTelefone(), agendaDto.getTelefone()) && Objects.equals(getDataNascimento(), agendaDto.getDataNascimento()) && Objects.equals(getLogradouro(), agendaDto.getLogradouro()) && Objects.equals(getNumero(), agendaDto.getNumero()) && Objects.equals(getComplemento(), agendaDto.getComplemento()) && Objects.equals(getBairro(), agendaDto.getBairro()) && Objects.equals(getLocalidade(), agendaDto.getLocalidade()) && Objects.equals(getUf(), agendaDto.getUf());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getNome(), getCpf(), getCnpj(), getEmail(), getTelefone(), getDataNascimento(), getLogradouro(), getNumero(), getComplemento(), getBairro(), getLocalidade(), getUf());
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
                ", logradouro='" + logradouro + '\'' +
                ", numero='" + numero + '\'' +
                ", complemento='" + complemento + '\'' +
                ", bairro='" + bairro + '\'' +
                ", localidade='" + localidade + '\'' +
                ", uf='" + uf + '\'' +
                '}';
    }
}