package karatsuba

import (
	// "fmt"
	"math"
	"math/big"
	// "strconv"
	// "strings"
)

func Karatsuba(intOne, intTwo *big.Int) *big.Int {
	if intOne.Cmp(big.NewInt(10)) < 1 || intTwo.Cmp(big.NewInt(10)) < 1 {
		return mul(intOne, intTwo)
	}

	m := getPivot(intOne, intTwo)
	var B float64
	B = 10.0

	a, b := halfNumbers(intOne, m)
	c, d := halfNumbers(intTwo, m)

	zTwo := Karatsuba(a, c)
	zOh := Karatsuba(b, d)
	zOne := add(Karatsuba(a, d), Karatsuba(b, c))

	prodOne := mul(zTwo, big.NewInt(int64(math.Pow(B, 2.0*float64(m)))))
	prodTwo := mul(zOne, big.NewInt(int64(math.Pow(B, float64(m)))))
	sumOne := add(prodOne, prodTwo)
	return add(sumOne, zOh)
}

func getPivot(numOne, numTwo *big.Int) int {
	lenOne := len(numOne.String())
	lenTwo := len(numTwo.String())

	if lenOne > lenTwo {
		return lenOne/2 + lenTwo%2
	} else {
		return lenTwo/2 + lenOne%2
	}
}

func halfNumbers(num *big.Int, half int) (*big.Int, *big.Int) {
	denom := big.NewInt(int64(math.Pow(10, float64(half))))

	left := big.NewInt(0).Div(num, denom)
	right := sub(num, mul(left, denom))

	return left, right
}

func mul(one, two *big.Int) *big.Int {
	return big.NewInt(0).Mul(one, two)
}

func add(one, two *big.Int) *big.Int {
	return big.NewInt(0).Add(one, two)
}

func sub(one, two *big.Int) *big.Int {
	return big.NewInt(0).Sub(one, two)
}
