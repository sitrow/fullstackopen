import axios from "axios";

const baseUrl = '/api/persons'

const getAll = () => {
    return axios.get(baseUrl)
}

const create = newPerson => {
    return axios.post(baseUrl, newPerson)
}

const remove = id => {
    const url = baseUrl + '/'+ id    
    return axios.delete(url)
}

const update = (id, changePerson) => {
    const url = baseUrl + '/'+ id
    console.log(url)
    return axios.put(url, changePerson)
}

export default {getAll, create, remove, update}