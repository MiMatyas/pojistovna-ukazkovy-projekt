package cz.matyas.Pojistovna.mailSender;

import cz.matyas.Pojistovna.domain.User;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;
import java.util.logging.Level;
import java.util.logging.Logger;

public class JavaMailUtil {
    public static void sendEmail(User user) throws Exception {
        System.out.println("Zahajuji odeslani emailu");
        Properties properties = new Properties();
        properties.put("mail.smtp.auth","true");
        properties.put("mail.smtp.starttls.enable","true");
        properties.put("mail.smtp.host","smtp.centrum.cz");
        properties.put("mail.smtp.port","587");

        String myAccountEmail = "testmailsender@centrum.cz";
        String password = "Testmailsender1";

        Session session = Session.getInstance(properties, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(myAccountEmail,password);
            }
        });
        Message message = prepareMessage(session, myAccountEmail, user);
        Transport.send(message);
        System.out.println("Zprava odeslana");
    }
    private static Message prepareMessage(Session session, String myAccountEmail, User user) {

        try {
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress(myAccountEmail));
            message.setRecipient(Message.RecipientType.TO, new InternetAddress(user.getEmail().toString()));
            message.setSubject("Vytvořeni pojištěnce "+user.getName()+" "+user.getSurname());
            message.setText("Na váš email byl právě registrován nový pojištěnec: \n"
                    +user.toString());
            return message;
        } catch (Exception e) {
            Logger.getLogger(JavaMailUtil.class.getName()).log(Level.SEVERE,null,e);
        }
        return null;
    }
}
