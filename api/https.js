import axios from "axios"
const http = axios.create({
	baseURL: 'https://service-76gok171-1313573410.bj.apigw.tencentcs.com',
	timeout: 5000
})
export function get(url, params = {}) {
	return new Promise((resolve, reject) => {
		http
			.get(url, {
				params: params
			})
			.then((response) => {
				resolve(response.data)
			})
			.catch((err) => {
				reject(err)
			})
	})
}
export function post(url, data = {}) {
	return new Promise((resolve, reject) => {
		http
			.post(url, {
				data
			})
			.then((response) => {
				resolve(response.data)
			})
			.catch((err) => {
				reject(err)
			})
	})
} // post请求