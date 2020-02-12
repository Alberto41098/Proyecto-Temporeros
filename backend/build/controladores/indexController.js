"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({
            'mensaje': 'Estas en el inicio'
        });
    }
}
exports.indexController = new IndexController;
