import client from "./client";

const getAllContracts = () => client.get("/contracts");

const getSpecificContract = (id) => client.get(`/contracts/${id}`);

const createNewContract = (body) => client.post(`/contracts`, body);

const updateContract = (id, body) => client.put(`/contracts/${id}`, body);

const getContractABI = (body) => client.post(`/contracts/getabi`, body);

export default {
    getAllContracts,
    getSpecificContract,
    createNewContract,
    updateContract,
    getContractABI,
};