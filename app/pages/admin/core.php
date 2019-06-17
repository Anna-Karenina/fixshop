<?php
$action = $_POST['action'];

require_once 'admfunck.php';

switch ($action) { //запуск кейсов к различным функциям
    case 'init':
        init();
        break;
    case "selectOneGoods" :
        selectOneGoods();
        break;
    case 'updateGoods' :
        updateGoods();
        break;
    case 'newGoods' :
        newGoods();
        break;
	case 'initFrameSet':
        initFrameSet();
        break;
	case 'initSeats':
        initSeats();
        break;
}