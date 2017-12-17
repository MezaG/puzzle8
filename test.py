import puzzle8
import unittest

class TestEvaluationMethod(unittest.TestCase):
    
    def testEvaluation(self):
        self.assertEqual(4,puzzle8.evaluation([[0,1,2],[3,5,4],[8,7,6]],[[0,1,2],[3,4,5],[6,7,8]]))
    
    def testZeroPosition(self):
        self.assertEqual({'x':1,'y':2},puzzle8.zeroPosition([[1,2,3],[4,5,0],[6,7,8]]))
    
    def testBestMoveX(self):
        XYarray =[]
        XYarray.append(0)
        XYarray.append(2)
        passedmatrix = [[1,4,2],[3,0,5],[6,7,8]]
        goal = [[0,1,2],[3,4,5],[6,7,8]]
        self.assertEqual([[1,0,2],[3,4,5],[6,7,8]],puzzle8.useBestMove(XYarray,{'x':1,'y':1},passedmatrix,3,'x',goal,[]))
    
    def testBestMoveY(self):
        XYarray =[]
        XYarray.append(0)
        XYarray.append(2)
        passedmatrix = [[1,0,2],[3,4,5],[6,7,8]]
        goal = [[0,1,2],[3,4,5],[6,7,8]]
        self.assertEqual([[0,1,2],[3,4,5],[6,7,8]],puzzle8.useBestMove(XYarray,{'x':0,'y':1},passedmatrix,3,'y',goal,[]))
    
    def testInRecord(self):
        history = [[[1,0,2],[3,4,5],[6,7,8]],[[0,1,2],[3,4,5],[6,7,8]]]
        puzzle = [[0,1,2],[3,4,5],[6,7,8]]
        self.assertTrue(puzzle8.inRecord(history,puzzle))



if __name__ == '__main__':
    unittest.main()
