package karatsuba

import (
	// "fmt"
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

// func TestBig(t *testing.T) {
// 	var bigOne int64
// 	bigOne = 3141592653589793238462643383279502884197169399375105820974944592
// 	var bigTwo int64
// 	bigTwo = 2718281828459045235360287471352662497757247093699959574966967627
// 	bigAf := Big(bigOne, bigTwo)

// 	fmt.Println(bigAf)

// 	if bigAf == 7 {
// 		t.Errorf("You broke it")
// 	}
// }
