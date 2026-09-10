import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

// Classe principal para demonstrar a notificação acessível
public class SistemaAcessivel {

    public static void main(String[] args) {
        ServicoNotificacao notificacao = new ServicoNotificacao();

        // Simula o recebimento de uma mensagem com efeito sonoro que precisa de feedback visual
        notificacao.enviarNotificacao(
            "Você recebeu uma nova mensagem!", 
            "Som de campainha suave"
        );
    }
}

// Classe responsável por gerenciar e emitir alertas focados em acessibilidade auditiva
class ServicoNotificacao {

    public void enviarNotificacao(String mensagem, String descricaoAudio) {
        String horario = LocalTime.now().format(DateTimeFormatter.ofPattern("HH:mm:ss"));

        System.out.println("==================================================");
        System.out.println(" [ALERTA VISUAL] " + horario);
        System.out.println("==================================================");
        
        // Exibe a mensagem principal
        System.out.println(" MENSAGEM: " + mensagem);
        
        // Transcrição/descrição textual do sinal sonoro associado
        if (descricaoAudio != null && !descricaoAudio.isEmpty()) {
            System.out.println(" DESCRICAO SONORA: [" + descricaoAudio + "]");
        }
        
        System.out.println("==================================================");
        
        // Simulação de um flash/sinalizador no console para captar a atenção visual
        emitirSinalVisual();
    }

    private void emitirSinalVisual() {
        try {
            // Efeito visual rápido piscando no console
            for (int i = 0; i < 3; i++) {
                System.out.print(" 🔔 [NOVA NOTIFICAÇÃO] \r");
                Thread.sleep(300);
                System.out.print("                       \r");
                Thread.sleep(300);
            }
            System.out.println(" 🔔 [NOVA NOTIFICAÇÃO]");
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
}
