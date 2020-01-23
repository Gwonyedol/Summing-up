import java.util.Scanner;

public class Day1 {
  public static void main(String[] args) {
    //숫자를 입력하면 각 자리수의 합을 보여주는 프로그램을 제작해보자
    System.out.println("숫자를 입력하세요:");
    Scanner sc = new Scanner(System.in);
    int num = Integer.parseInt(sc.nextLine());
    int sum = 0;
    
    while(num!=0) {
      sum+=num%10;
      num=num/10;
      
    }
    System.out.println("각 자리수의 합:"+sum);
    

    
    
    
  }
}
