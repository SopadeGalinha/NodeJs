/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ex02.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: codespace <codespace@student.42.fr>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/01/12 19:24:32 by codespace         #+#    #+#             */
/*   Updated: 2024/01/12 19:37:52 by codespace        ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

main();

const students = [
    { id: 1, nome: 'Harry Potter' },
    { id: 2, nome: 'Hermione Granger' },
    { id: 3, nome: 'Ronald Weasley' }
];

async function getStudent(identifier) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let student;
            if (typeof identifier === 'number') {
                // Pesquisar por id
                student = students.find(i => i.id === identifier);
            } else if (typeof identifier === 'string') {
                // Pesquisar por nome
                student = students.find(s => s.nome === identifier);
            }

            if (student) {
                resolve(student);
            } else {
                reject('Student not found');
            }
        }, 1000);
    });
}

function getStudentByName(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const student = students.find(s => s.nome === name);
            if (student) {
                resolve(student);
            } else {
                reject('Student not found');
            }
        }, 1000);
    });
}

function getStudentById(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const student = students.find(s => s.id === id);
            if (student) {
                resolve(student);
            } else {
                reject('Student not found');
            }
        }, 1000);
    });
}

async function main() {
    try {
        console.log('searching for student using id...');
        let student = await getStudentById(2);
        console.log('Student:', student.nome);
        console.log('Searching for student using name...');
        student = await getStudentByName(student.nome);
        console.log('Searched Student:', student.nome);
    } catch (error) {
        
        console.error('Error', error);
    }
}
