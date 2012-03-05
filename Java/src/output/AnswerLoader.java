package output;
import questions.Euler_1_to_5;

public class AnswerLoader {
	public static void main(String args[]){
		Euler_1_to_5 answer = new Euler_1_to_5();
		System.out.println("Question 1: " + answer.getEuler1Answer());
		System.out.println("Question 2: " + answer.getEuler2Answer());
		System.out.println("Question 3: " + answer.getEuler3Answer());
		System.out.println("Question 4: " + answer.getEuler4Answer());
		System.out.println("Question 5: " + answer.getEuler5Answer());
	}

}
