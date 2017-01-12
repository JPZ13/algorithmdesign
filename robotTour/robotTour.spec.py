import unittest
from robotTour import robot_tour

class TestStringMethods(unittest.TestCase):

    def test_three(self):
        board_three = [
                [0,0,0],
                [0,1,0],
                [0,0,0]
                ]
        self.assertEqual(robot_tour(board_three), 2)

    def test_five(self):
        board_five = [
                [0,0,0,0,0],
                [0,1,1,1,0],
                [0,0,0,0,0],
                [0,1,1,1,0],
                [0,0,0,0,0]
                ]
        self.assertEqual(robot_tour(board_five), 3)

if __name__ == '__main__':
    unittest.main()
