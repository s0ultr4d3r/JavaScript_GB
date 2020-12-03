let game = {
    /**
     * Запуск.
     */
    run() {
        // Цикл.
        while (true) {
            // Получаем направление.
            const direction = mover.getDirection();

            // Выход из игры.
            if (direction === null) {
                console.log("Игра окончена.");
                return;
            }
            // Получаем следующую точку.
            const nextPoint = mover.getNextPosition(direction);
            // Движение.
            if (mover.canPlayerMakeStep(nextPoint)) {
                renderer.clear();
                player.move(nextPoint);
                renderer.render();
            }
        }
    },

    // Инициализация.
    init() {
        console.log("Ваше положение на поле в виде о.");
        // Отображаем игру.
        renderer.render();
        console.log("Чтобы начать игру наберите game.run() и нажмите Enter.");
    }
};

game.init();