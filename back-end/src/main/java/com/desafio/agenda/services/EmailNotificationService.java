package com.desafio.agenda.services;

import com.desafio.agenda.controllers.AgendaController;
import com.desafio.agenda.models.AgendaModel;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class EmailNotificationService {

    private static final String NOTIFICATION_ENDPOINT = "https://run.mocky.io/v3/c9ec2ca3-a7f5-41d0-8550-b859508f4948";
    RestTemplate restTemplate = new RestTemplate();
    private static final Logger logger = LoggerFactory.getLogger(AgendaController.class);

    /**
     * Método para enviar e-mail de notificação
     * @param contact contato para o qual a notificação será enviada
     */
    public void sendEmailNotification(AgendaModel contact) {
        String response = restTemplate.getForObject(NOTIFICATION_ENDPOINT, String.class);

        if (response != null && response.contains("Email enviado com sucesso!")) {
            logger.info("E-mail de notificação enviado com sucesso para o contato com ID {}", contact.getId());
        } else {
            logger.error("Erro ao enviar e-mail de notificação para o contato com ID {}", contact.getId());
        }
    }
}