/**
 * Создает матрицу размером n * n и заполняет ее по спирали
 *
 * @param {Number} n - размерность матрицы
 * @returns {Number[n][n]} - n * n - матрица, заполненная по спирали
 */
function fillSpiralMatrix(n) {
  //создание двумерного массива n x n элементов
  const result = new Array(n);
  for (let i = 0; i < result.length; i++){
    result[i] = new Array(n);
  }
 
  //coordX,coordY - текущяя позиция; 
  //stepX,stepY - шаг цикла;
  //left,top,right,bottom - граница заполняемой матрицы;
  //count - счетчик для заполнения матрицы от 1 до n^2
  let coordX = -1, 
      coordY = 0,
      stepX = 1,
      stepY = 0,
      left = 0,
      top = 0,
      right = n - 1,
      bottom = n - 1,
      count = 1,
      flag = false;
  //цикл do-while после прохождения строки/столбца меняет границу матрицы и шаг цикла
  do{
    flag = false;
    //цикл двигается по строке/столбцу в зависимости от значения stepX||stepY
    while( (stepX > 0 && coordX < right) || (stepY > 0 && coordY < bottom) ||
           (stepX < 0 && coordX > left) ||  (stepY < 0 && coordY > top) ) {
      
      coordX += stepX;
      coordY += stepY;
      result[coordY][coordX] = count++;
      flag = true;
    }

    if (stepX > 0) right--;
    if (stepY > 0) bottom--;
    if (stepX < 0) left++;
    
    //после каждой итерации шаг цикла меняет свое значение на противоположное своего соседа
    //stepX: 1  0 -1  0  1  0 -1 ...
    //stepY: 0  1  0 -1  0  1  0 ...
    
    let temp = stepX;
    stepX = -stepY;
    stepY = temp;
    
    if (stepY < 0) top++;
    
  }while(flag);

  return result;
}

export default fillSpiralMatrix;
