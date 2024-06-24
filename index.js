"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpClient = void 0;
class HttpClient {
    get(url_1) {
        return __awaiter(this, arguments, void 0, function* (url, params = {}) {
            try {
                const query = new URLSearchParams(params).toString();
                const response = yield fetch(`${url}?${query}`);
                return yield response.json();
            }
            catch (error) {
                console.error('GET request failed:', error);
                throw error;
            }
        });
    }
    post(url_1) {
        return __awaiter(this, arguments, void 0, function* (url, body = {}) {
            try {
                const response = yield fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body),
                });
                return yield response.json();
            }
            catch (error) {
                console.error('POST request failed:', error);
                throw error;
            }
        });
    }
}
exports.HttpClient = HttpClient;
