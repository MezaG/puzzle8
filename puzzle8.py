from random import shuffle, random, randint
from math import floor
from copy import deepcopy
def puzzle(matrix, goal):
    history = []
    xarray = []
    yarray = []
    XYArray = []
    counter = 0
    with open('output.txt','w') as f:
        print >> f, 'el estado inicial es: \n', matrix[0],'\n',matrix[1],'\n',matrix[2],'\n'
    history.append(matrix)
    print(evaluation(matrix,goal))
	
    while(matrix != goal):
        counter+=1
        if counter == 400:
            print evaluation(matrix,goal)
            break
        if matrix == goal:
            print 'Se ha resuelto'
            break
        # if counter == 100:
        #     matrix = shuffleMatrix()
        #     print 'la matriz se cambio a:\n',matrix[0],'\n',matrix[1],'\n',matrix[2],'\n'
        zeroPos = zeroPosition(matrix)
        if zeroPos['y'] == 1:
            yarray.append(0)
            yarray.append(2)
        else:
            yarray.append(1)
        if zeroPos['x'] == 1:
            xarray.append(0)
            xarray.append(2)
        else:
            xarray.append(1)
        XYArray.append(xarray)
        XYArray.append(yarray)
    	
        moves = useBestMove(XYArray, zeroPos, matrix)
        # with open('output.txt','a') as f:
        #     print >> f, 'x: \t \t y:\n',bestMoveX[0],' ',bestMoveY[0],'\n',bestMoveX[1],' ',bestMoveY[1],'\n',bestMoveX[2],' ',bestMoveY[2],'\n'

        maxEvaluation = evaluation(matrix,goal)
        change = False
        for m in moves:
            evalu = evaluation(m,goal)
            # print m
            if (evalu < maxEvaluation):
                if not inRecord(history,m):
                    change = True
                    matrix = m
        if change == False:
            while len(moves) > 0:
                if change == False:
                    temporal = moves.pop(randint(0,(len(moves)-1)))
                    if not inRecord(temporal,history):
                        change = True
                        matrix = deepcopy(temporal)
                        break
        if change == False:
            matrix = deepcopy(history[-1])

        # if(xHeuristic < heuristic):
        #     if(not inRecord(history,bestMoveX)):
        #         matrix = bestMoveX	
        # else:
        #     if(not inRecord(history,bestMoveY)):
        #         matrix = bestMoveY
            # else:
            #     if not inRecord(history,bestMoveX):
            #         matrix = bestMoveX
            #     else:
            #         matrix = history[-1]
        with open('output.txt','a') as f:
            print >> f, 'el movimiento elegido \n',matrix[0],'\n',matrix[1],'\n',matrix[2],'\n'

        history.append(matrix)
        if(len(history) > 30):
            history.pop()

        # with open('output.txt','a') as f:
        #     print >> f, 'Move', '\n',matrix[0],'\n', matrix[1], ' \n', matrix[2], '\n'

def inRecord(recordHistory, puzzle):
    for record in recordHistory:
        if(record == puzzle):
            return True
    return False

def useBestMove(XYarray, zeroPos, passedmatrix):
    matrix = deepcopy(passedmatrix)
    movelist = []
    XY = 'x'
    while(len(XYarray[1]) > 0):
        if len(XYarray[0]) > 0:
            tempXY = XYarray[0].pop()
            temp = matrix[tempXY][zeroPos['y']]
            matrix[zeroPos['x']][zeroPos['y']] = temp
            matrix[tempXY][zeroPos['y']] = 0
            XY = 'x'
        elif len(XYarray[1]) > 0:
            tempXY = XYarray[1].pop()
            temp = matrix[zeroPos['x']][tempXY]
            matrix[zeroPos['x']][zeroPos['y']] = temp
            matrix[zeroPos['x']][tempXY] = 0
            XY = 'y'
        movelist.append(deepcopy(matrix))
        if(XY == 'x'):
            matrix[zeroPos['x']][zeroPos['y']] = 0
            matrix[tempXY][zeroPos['y']] = temp
        else:
            matrix[zeroPos['x']][zeroPos['y']] = 0
            matrix[zeroPos['x']][tempXY] = temp
    return movelist

def evaluation(puzzle, goal):
	heuristic = 0
	for i in range (0, 3):
		for j in range (0, 3):
			if(puzzle[i][j] != goal[i][j]):
				heuristic+=1
	return heuristic

def zeroPosition(matrix):
	position = {'x' : 0,'y' : 0}

	for i in range (0, 3):
		for j in range (0, 3):
			if(matrix[i][j] == 0):
				position['x'] = i
				position['y'] = j
	return position

def shuffleMatrix():
    array = [0,1,2,3,4,5,6,7,8]
    matrix = [[0,0,0],[0,0,0],[0,0,0]]
    i = len(array)
    shuffle(array)
    for i in range(0, 3):
        for j in range(0, 3):
            matrix[i][j] = array.pop()
    return matrix


def main():
    goal = [[1,2,3],[4,5,6],[7,8,0]]
    matrix = shuffleMatrix()
    print 'la matriz:\n',matrix[0],'\n',matrix[1],'\n',matrix[2],'\n'
    #print ('el goal: ',goal,'\n')
    puzzle(matrix,goal)

if __name__ == "__main__":
    main()
