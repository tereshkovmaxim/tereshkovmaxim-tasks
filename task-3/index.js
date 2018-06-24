class Emitter {
  
  /**
   * Создает экземпляр класса Emitter.
   * @memberof Emitter
   */
  constructor() {
    //Объект в котором будем хранить события и обработчики
    this.events = {};
  }

  /**
   * связывает обработчик с событием
   *
   * @param {String} event - событие
   * @param {Function} handler - обработчик
   * @memberof Emitter
   */
  on(event, handler) {
    //Создаем событие, если еще не создано и добавляем обработчик 
    if (!this.events[event]) 
      this.events[event] = {handlers: []};
    this.events[event].handlers.push(handler);
  }

  /**
   * Генерирует событие -- вызывает все обработчики, связанные с событием и
   *                       передает им аргумент data
   *
   * @param {String} event
   * @param {*} data
   * @memberof Emitter
   */
  emit(event, data) {
    //Если нет события или нет обработчиков, ничего не делаем
    if (!this.events[event] || !this.events[event].handlers.length )
      return false;
    //Вызывем каждый обработчик
    this.events[event].handlers.forEach(item => item(data));
  }
}

export default Emitter;
