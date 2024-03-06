import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class SimpleMathTest{

  @Test
  void testAddPass(){
    //Arrange
    int number1 = 3;
    int number2 = 2;
    int result = 0;
    var simpleMath = new SimpleMath();

    //Act
    result = simpleMath.add(number1, number2);

    //Assert
    assertEquals(5, result);
  }

  @Test
  void testAddSimplified(){
    assertEquals(5, simpleMath.add(3, 2));
  }

  @Test
  void testAddNotEqual(){
    assertNotEquals(2, simpleMath.add(2, 2));
  }

  @Test
  void testAddTrue(){
    assertTrue(simpleMath.add(5, 5) == 10);
  }

  @Test
  void testAddFail(){
    assertEquals(2, simpleMath.add(2, 2));
  }

}



//assertEquals(10, simpleMath.add(5, 5));
//assertEquals(2, simpleMath.add(2, 2)); //Failing test sample
//assertNotEquals(2, simpleMath.add(2, 2));
//assertTrue(simpleMath.add(5, 5) == 10);
//assertFalse(simpleMath.add(5, 5) == 10);
//assertNotNull(simpleMath.add(2, 2));
