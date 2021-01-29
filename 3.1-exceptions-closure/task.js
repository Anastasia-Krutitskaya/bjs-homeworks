// Задача № 1 ------------------------------------------------------------------
function parseCount(number) {
  let parsedNumber = Number.parseInt(number);
  if (isNaN(parsedNumber)) {
    throw new Error('Невалидное значение') ;
  }
  return parsedNumber;
}

function validateCount(number) {
  try {
    return parseCount(number);
  } catch(e) {
    return e;
  }
}

// Задача № 2 ------------------------------------------------------------------
class Triangle {
  constructor(a,b,c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if (this.a + this.b < this.c
      || this.a + this.c < this.b
      || this.b + this.c < this.a) {
      throw new Error('Треугольник с такими сторонами не существует');
      }
    }

  getPerimeter() {
    return this.a + this.b + this.c;
    }

  getArea(p) {
    p = this.getPerimeter()/2;
    const s = Math.sqrt(p*(p - this.a)*(p - this.b)*(p - this.c));
    return  +s.toFixed(3);
    }
}

function getTriangle(a,b,c) {
  try {
    return new Triangle(a,b,c);
  } catch {
    return  {
      getPerimeter() {
        return "Ошибка! Треугольник не существует";
      },
      getArea() {
          return "Ошибка! Треугольник не существует";
      }
    }
  }
}
