import unittest
from insertionSort import insertion_sort

class TestStringMethods( unittest.TestCase ):

    def test_numbers( self ):
        self.assertEqual( insertion_sort([ 3, 4, 1, 2 ]), [ 1, 2, 3, 4 ] )

    def test_words( self ):
        self.assertEqual( insertion_sort([ 'cat', 'bat', 'hat' ]), [ 'bat',
            'cat', 'hat' ] )

    def test_characters( self ):
        self.assertEqual( insertion_sort([ 'c', 'f', 'z', 'd' ]), [ 'c', 'd',
            'f', 'z' ] )


if __name__ == '__main__':
    unittest.main()
