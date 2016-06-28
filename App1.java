import java.util.*;

public class App1 {

    public static void main(String [] args) {
        
        char[] alphabet = " abcdefghijklmnopqrstuvwxyz".toCharArray();
        
        int[] msg = {103, 41, 47, 0, 75, 145, 70, 63, 0, 67, 144, 0, 124, 60, 109, 0, 32, 119, 151, 148, 72, 31, 109, 66, 98, 60, 0, 32, 64, 93, 67, 44};
     
        System.out.println(message(alphabet, msg));
        
    }

    public static String message(char alphabet[], int msg[]){
        
        int temp;
        char letter;
        String text = "";
        
        for(int i = 0; i < msg.length; i++ ){
            temp = msg[i] % 26;
            letter = alphabet[temp];
            text += letter;
            
        }

        return text;
    }
}