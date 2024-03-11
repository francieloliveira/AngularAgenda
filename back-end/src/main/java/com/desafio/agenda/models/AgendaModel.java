package com.desafio.agenda.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import org.hibernate.validator.constraints.br.CPF;

import java.io.Serial;
import java.io.Serializable;
import java.util.Date;
import java.util.Objects;
import java.util.UUID;

@Entity
@Table(name = "agenda")
public class AgendaModel implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @NotNull
    @Column(name = "nome", nullable = false)
    private String nome;

    @CPF
    @Column(name = "cpf", unique = true)
    private String cpf;

    @Column(name = "cnpj", unique = true)
    private String cnpj;

    @Column(name = "email")
    private String email;

//    @Pattern(regexp = "\\(\\d{2}\\) \\d{4}-\\d{4}")
    @Column(name = "telefone")
    private String telefone;

    @Temporal(TemporalType.DATE)
    @Column(name = "data_nascimento", nullable = false)
    private Date dataNascimento;

    @Column(name = "cep")
    private String cep;

    @Column(name = "logradouro")
    private String logradouro;

    @Column(name = "numero")
    private String numero;

    @Column(name = "complemento")
    private String complemento;

    @Column(name = "bairro")
    private String bairro;

    @Column(name = "localidade")
    private String localidade;

    @Column(name = "uf")
    private String uf;

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
        AgendaModel that = (AgendaModel) o;
        return Objects.equals(id, that.id) && Objects.equals(nome, that.nome) && Objects.equals(cpf, that.cpf) && Objects.equals(cnpj, that.cnpj) && Objects.equals(email, that.email) && Objects.equals(telefone, that.telefone) && Objects.equals(dataNascimento, that.dataNascimento) && Objects.equals(cep, that.cep) && Objects.equals(logradouro, that.logradouro) && Objects.equals(numero, that.numero) && Objects.equals(complemento, that.complemento) && Objects.equals(bairro, that.bairro) && Objects.equals(localidade, that.localidade) && Objects.equals(uf, that.uf);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nome, cpf, cnpj, email, telefone, dataNascimento, cep, logradouro, numero, complemento, bairro, localidade, uf);
    }

    @Override
    public String toString() {
        return "AgendaModel{" +
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