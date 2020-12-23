/**
 * Recursividad
 */

/**
 * Interfaces
 */

interface TreeNode<T> {
    value: T;
    children?: Array<TreeNode<T>>
}

const myTree: TreeNode<number> = {
    value: 1,
    children: [
        {
            value: 2
        },
        {
            value: 5,
            children: [
                {
                    value: 2
                }
            ]
        }
    ]
}
/**
 *Alias con Interfaces
 */

type ListIterable<T> = T & { next: ListIterable<T> }

class Student {
    name: string;
}

let myStudents: ListIterable<Student>;
myStudents.name;
myStudents.next.next.name;
// myStudents.next.next.next.;

/**
 *Alias con Interfaces
 */

type TreeNode1<T> = T | Array<TreeNode1<T>>

let myTreeBoolean: TreeNode1<boolean> = [
    true,
    [false, true, [true]]
]