import java.util.HashMap;
import java.util.Iterator;

public class Day3 {
  public static void main(String[] args) {
    HashMap<String, Integer> test = new HashMap<String, Integer>();
    // put() 메소드를 이용한 요소의 저장
    test.put("일", 1);
    test.put("이", 2);
    test.put("삼", 3);
    test.put("사", 4);
    // Enhanced for 문과 get() 메소드를 이용한 요소의 출력
    System.out.println("HashMap의 Key값뽑기 : "+test.keySet());
    System.out.print("HashMap의 value값뽑기 : ");  
    for(String Key:test.keySet()) {
      System.out.print(test.get(Key)+" ");
    }
    System.out.println();
    // remove() 메소드를 이용한 요소의 제거
    test.remove("일");
    // iterator() 메소드와 get() 메소드를 이용한 요소의 출력
    Iterator<String> testKey = test.keySet().iterator();
    while(testKey.hasNext()) {
      System.out.println(test.get(testKey.next()));
    }
  }
}
