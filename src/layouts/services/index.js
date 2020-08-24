import axios from '@/axios'

export const getPharmacies = () => {
	return axios.get(`pharmacies`)
}

export const findPharmacyByName = (credentials) => {
	return axios.get(`pharmacies/search/findPharmacyByName{?${credentials.name}}`)
}

export const findPharmacyByCityOrderByCityAsc = (credentials) => {
	return axios.get(`pharmacies/search/findPharmacyByCityOrderByCityAsc{?${credentials.name}}`)
}