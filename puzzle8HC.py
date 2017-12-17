from random import shuffle
from copy import deepcopy
def puzzle(matrix,goal):
    numeros = []
    pasos = 0
    for i in range(0, 100):
        for i in range(0, 3):
            for j in range(0, 3):
                if matrix[i][j] != goal[i][j]:
                    numeros.append(matrix[i][j])
                    matrix[i][j] = 'x'
        matrix = shuffleMatrix(matrix,numeros)
        pasos += 1
        print '\n',matrix[0],'\n',matrix[1],'\n',matrix[2],'\n'
        if matrix == goal:
            print 'se ha logrado resolver en ', pasos  ,' pasos',
            break

def shuffleMatrix(matrix,array):
    Array = deepcopy(array)
    Matrix = deepcopy(matrix)
    i = len(array)
    shuffle(array)
    for i in range(0, 3):
        for j in range(0, 3):
            if matrix[i][j] == 'x':
                matrix[i][j] = array.pop()
    return matrix

def main():
    goal = [[1,2,3],[4,5,6],[7,8,0]]
    array = [0,1,2,3,4,5,6,7,8]
    matrix = [[0,0,0],[0,0,0],[0,0,0]]
    i = len(array)
    shuffle(array)
    for i in range(0, 3):
        for j in range(0, 3):
            matrix[i][j] = array.pop()
    print 'la matriz:\n',matrix[0],'\n',matrix[1],'\n',matrix[2],'\n'
    puzzle(matrix,goal)

if __name__ == "__main__":
    main()
