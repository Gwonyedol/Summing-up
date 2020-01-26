import java.util.regex.Pattern;

import javax.swing.JOptionPane;
public class Day2 {
  public static void main(String[] args) {
    /* 1. 주민번호의 합을 구하시오 
     * 2. 주민번호를 입력받을때 "ㅁㅁㅁㅁㅁㅁ-ㅁㅁㅁㅁㅁㅁㅁ"형식으로 받게 하시오 ->정규표현식
     */
    String jumin = JOptionPane.showInputDialog("주민등록 번호를 입력하시오 \n(ex)123456-1234567");
    String patternJumin = "\\d{6}\\-[1-4]\\d{6}";
    
    
    if(Pattern.matches(patternJumin, jumin)) {   
      int num = jumin.indexOf("-");
      int sum = 0;
      
      String frontJumin = jumin.substring(0, num);
      String backJumin = jumin.substring(num + 1, jumin.length());
      
      for (int i = 0; i < frontJumin.length(); i++) {
        sum += Integer.parseInt(frontJumin.substring(i, i + 1));
      }
      
      for (int i = 0; i < backJumin.length(); i++) {
        sum += Integer.parseInt(backJumin.substring(i, i + 1));
      }
      
      System.out.println("주민번호 뒷자리 첫번째: "+jumin.substring(num+1,num+2));
      
      if(Integer.parseInt(jumin.substring(num+1,num+2)) == (1|3)) {
        System.out.println("남자입니다");
      }else if(Integer.parseInt(jumin.substring(num+1,num+2)) == (2|4)){
        System.out.println("숙녀분입니다");
        }
      
      System.out.println("주민등록번호의 합:"+sum);
    }else{
      System.out.println("잘못 입력하심..ㅡㅡ");
    }
 
    
    
  }
}