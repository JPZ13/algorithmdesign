def robot_tour(board):

    counter = {'a':0}

    def tour_helper(board, x, y):
        if y == len(board)-1 and x == len(board[y])-1:
            counter['a'] += 1
            return
            

        board[y][x] = 1

        if y < len(board)-1 and board[y+1][x] == 0:
            tour_helper(list(board), x, y+1)

        if x < len(board[y])-1 and board[y][x+1] == 0:
            tour_helper(list(board), x+1, y)
    
    tour_helper(board, 0, 0)

    return counter['a']
