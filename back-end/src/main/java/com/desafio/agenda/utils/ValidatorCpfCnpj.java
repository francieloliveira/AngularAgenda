package com.desafio.agenda.utils;

public class ValidatorCpfCnpj {
    private ValidatorCpfCnpj() {
    }

    /**
     * Método para verificação da validade do CPF
     * @param cpf
     * @return
     */
    public static boolean isValidCPF(String cpf) {
        // Remove caracteres não numéricos
        cpf = cpf.replaceAll("[^0-9]", "");

        // Verifica se a quantidade de dígitos é 11
        if (cpf.length() != 11) {
            return false;
        }

        // Primeiro dígito verificador
        int sum = 0;
        for (int i = 0; i < 9; i++) {
            sum += Character.getNumericValue(cpf.charAt(i)) * (10 - i);
        }
        int remainder = 11 - (sum % 11);
        int firstDigit = (remainder == 10 || remainder == 11) ? 0 : remainder;

        // Segundo dígito verificador
        sum = 0;
        for (int i = 0; i < 10; i++) {
            sum += Character.getNumericValue(cpf.charAt(i)) * (11 - i);
        }
        remainder = 11 - (sum % 11);
        int secondDigit = (remainder == 10 || remainder == 11) ? 0 : remainder;

        // Verifica se os dígitos verificadores são iguais aos fornecidos
        return Character.getNumericValue(cpf.charAt(9)) == firstDigit && Character.getNumericValue(cpf.charAt(10)) == secondDigit;
    }

    /**
     * Método para a verificação da validade do cnpj
     * @param cnpj
     * @return
     */
    public static boolean isValidCNPJ(String cnpj) {
        // Remove caracteres não numéricos
        cnpj = cnpj.replaceAll("[^0-9]", "");

        // Verifica se a quantidade de dígitos é 14
        if (cnpj.length() != 14) {
            return false;
        }

        // CPrimeiro dígito verificador
        int sum = 0;
        int factor = 5;
        for (int i = 0; i < 12; i++) {
            sum += Character.getNumericValue(cnpj.charAt(i)) * factor;
            factor = (factor == 2) ? 9 : factor - 1;
        }
        int remainder = sum % 11;
        int firstDigit = (remainder < 2) ? 0 : 11 - remainder;

        // Segundo dígito verificador
        sum = 0;
        factor = 6;
        for (int i = 0; i < 13; i++) {
            sum += Character.getNumericValue(cnpj.charAt(i)) * factor;
            factor = (factor == 2) ? 9 : factor - 1;
        }
        remainder = sum % 11;
        int secondDigit = (remainder < 2) ? 0 : 11 - remainder;

        // Verifica se os dígitos verificadores são iguais aos fornecidos
        return Character.getNumericValue(cnpj.charAt(12)) == firstDigit && Character.getNumericValue(cnpj.charAt(13)) == secondDigit;
    }
}
