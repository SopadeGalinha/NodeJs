/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ex01.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: codespace <codespace@student.42.fr>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/01/12 19:22:44 by codespace         #+#    #+#             */
/*   Updated: 2024/01/12 19:22:45 by codespace        ###   ########.fr       */
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
                student = students.find(s => s.id === identifier);
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

async function main() {
    try {
        const student = await getStudent(2);
        console.log('searching for student using id...');
        
        // Corrected line, added await or use .then()
        const studentById = await getStudent(1);
        console.log('Student:', studentById.nome);

        console.log('Searching for student using name...');
        const searchedStudent = await getStudent('Harry Potter');
        console.log('Searched Student:', searchedStudent.nome);
    } catch (error) {
        console.error('Error', error);
    }
}
