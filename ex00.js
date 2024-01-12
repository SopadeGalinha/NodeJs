/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ex00.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: codespace <codespace@student.42.fr>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/01/12 19:22:39 by codespace         #+#    #+#             */
/*   Updated: 2024/01/12 19:22:40 by codespace        ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

main();

const students = [
    { id: 1, nome: 'Harry Potter' },
    { id: 2, nome: 'Hermione Granger' },
    { id: 3, nome: 'Ronald Weasley' }
];

async function getStudent(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const student = students[id];
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
        console.log('Student:', student.nome);
    } catch (error) {
        console.error('Error', error);
    }
    
}
