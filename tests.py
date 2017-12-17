
from copy import deepcopy
def useBestMove(XYarray, zeroPos, passedmatrix):
    matrix = deepcopy(passedmatrix)
    movelist = []
    XY = 'x'
    while(len(XYarray[1]) > 0):
        print len(XYarray[1])
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
        print matrix
        movelist.append(deepcopy(matrix))
        print movelist
        if(XY == 'x'):
            matrix[zeroPos['x']][zeroPos['y']] = 0
            matrix[tempXY][zeroPos['y']] = temp
        else:
            matrix[zeroPos['x']][zeroPos['y']] = 0
            matrix[zeroPos['x']][tempXY] = temp
    return movelist
