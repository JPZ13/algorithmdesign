package karatsuba

import (
	"fmt"
	"math/big"
	"testing"
)

func TestPivot(t *testing.T) {
	bigPi := big.NewInt(31415926)
	bigE := big.NewInt(27182818)

	pivot := getPivot(bigPi, bigE)

	if pivot != 4 {
		t.Errorf("Expected 4 but got", pivot)
	}
}

func TestHalf(t *testing.T) {
	bigPi := big.NewInt(31415926)
	bigE := big.NewInt(27182818)
	a, b := halfNumbers(bigPi, 4)
	c, d := halfNumbers(bigE, 4)

	if a.Cmp(big.NewInt(3141)) != 0 {
		t.Errorf("Expected 3141 but got", a)
	}

	if b.Cmp(big.NewInt(5926)) != 0 {
		t.Errorf("Expected 5926 but got", b)
	}

	if c.Cmp(big.NewInt(2718)) != 0 {
		t.Errorf("Expected 2718 but got", c)
	}

	if d.Cmp(big.NewInt(2818)) != 0 {
		t.Errorf("Expected 2818 but got", d)
	}
}

func TestOps(t *testing.T) {
	bigTen := big.NewInt(10)
	bigTwenty := big.NewInt(20)
	twoHundred := mul(bigTen, bigTwenty)
	thirty := add(bigTen, bigTwenty)

	if twoHundred.Cmp(big.NewInt(200)) != 0 {
		t.Errorf("Expected 200 but got", twoHundred)
	}

	if thirty.Cmp(big.NewInt(30)) != 0 {
		t.Errorf("Expected 30 but got", thirty)
	}
}

func TestBig(t *testing.T) {

	karatOne := big.NewInt(314159)
	karatTwo := big.NewInt(271828)

	karatTest := Karatsuba(karatOne, karatTwo)

	if karatTest.Cmp(big.NewInt(85397212652)) != 0 {
		t.Error("Expected 85397212652 but got", karatTest.String())
	}

	bigOne, bigTwo := new(big.Int), new(big.Int)
	bigOne.SetString("3141592653589793238462643383279502884197169399375105820974944592", 10)
	bigTwo.SetString("2718281828459045235360287471352662497757247093699959574966967627", 10)
	bigAf := Karatsuba(bigOne, bigTwo)
	bigTest := big.NewInt(0).Mul(bigOne, bigTwo)

	fmt.Println(bigOne.String())
	fmt.Println(bigTwo.String())
	fmt.Println(bigAf.String())
	fmt.Println(bigTest.String())
	if bigAf.Cmp(bigTest) != 0 {
		t.Errorf("You broke it")
	}
}
