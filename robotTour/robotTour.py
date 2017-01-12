counter = 0

def robot_tour(board):

    def tour_helper(board, x, y, counter):
        if y == len(board)-1 and x == len(board[y])-1:
            global counter
            counter = counter + 1
            return
            

        board[y][x] = 1

        if y < len(board)-1 and board[y+1][x] == 0:
            tour_helper(board, x, y+1)

        if x < len(board[y])-1 and board[y][x+1] == 0:
            tour_helper(board, x+1, y)
    
    tour_helper(board, 0, 0)

    return counter
