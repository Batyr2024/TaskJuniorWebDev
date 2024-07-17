//Типизировать функцию при помощи interface используя generic
//функция должна принимать любой тип данных
     const generateEntity =(value) => {
         return {
             value: value,
             array: [value, value, value],
             func: () => value
         }
     }
     
     const numberEntity = generateEntity(5);
     const booleanEntity = generateEntity(false);