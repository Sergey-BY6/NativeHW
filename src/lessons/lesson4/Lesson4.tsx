import React from 'react'
import './lesson_4';

type handlePromiseType = {
    promise: any,
    resolve: any,
    reject: any,
    onSuccess: (paramName: string) => void
    onError: (paramName: string) => void
}


const Lesson4 = () => {

    const createPromise1 = () => {
        let promise1 = new Promise((res, rej) => {
            console.log('Promise is creating')

        })
        console.log(promise1)
        return promise1
    }

    const createPromise2 = () => {
        let promise1 = new Promise((res, rej) => {
            res('Promise Data')
        })
        return promise1.then((data) => {
            console.log(data)
        })
    }

    const createPromise3 = () => {
        let promise1 = new Promise((res, rej) => {
            rej('Promise Error')
        })
        return promise1.then((data) => {
            console.log(data)
        })
    }


    const createPromise4 = () => {
        let promise1 = new Promise((res, rej) => {
            setTimeout(() => {
                res('Promise Data')
            }, 3000)
        })
        return promise1.then((data) => {
            console.log(data)
        })
    }

    let handlePromise: handlePromiseType = {
        promise: null,
        resolve: null,
        reject: null,
        onSuccess: (paramName: string) => {
            console.log(`Promise is resolved with data: ${paramName}`)
        },
        onError: (paramName: string) => {
            console.log(`Promise is rejected with error: ${paramName}`)
        }
    }

    const onClicCreatePromise5 = () => {

        handlePromise.promise = new Promise((res, rej) => {
        })
        new Promise((res, rej) => {
            handlePromise.resolve = res
        })
        new Promise((res, rej) => {
            handlePromise.reject = res
        })
        console.log(handlePromise)
    }

    const onClicResolvePromise5 = () => {
        handlePromise.onSuccess('fullfild')
    }
    const onClicRejectPromise5 = () => {
        handlePromise.onError('rejected')
    }


    const onSuccessPromise6 = (value: any) => {
        console.log(`${value} Сергей`)
        return `${value} Сергей`
    }

    const printPromise6 = (value: string) => {
        console.log(value)
    }

    const createPromise6 = () => {
        let promise = new Promise((res, rej) => {
            res('My name is')
        })
        setTimeout(() => {
            promise.then((data) => {
                onSuccessPromise6(data)
            }).then((data) => {
                printPromise6('тыгыдык')
            })
        }, 2000)
    }


    // new Promise((res, rej) => {
    //     let obj = {
    //         name: 'Ann'
    //     }
    //     setTimeout(() => {
    //         res(obj)
    //         console.log({name: "Ann"})
    //         console.log({name: obj})
    //     }, 2000)
    // })
    //     .then((data: any) => {
    //         setTimeout(() => {
    //             data.age = 25
    //             console.log({age: 25})
    //             console.log(data)
    //         }, 1000)
    //         return  data
    //     })
    //     .then((data: any) => {
    //
    //         setTimeout(() => {
    //             data.city = ""
    //             console.log({city: ""})
    //             console.log(data)
    //         }, 1000)
    //         return data
    //     })
    //     .then((data: any) => {
    //         setTimeout(() => {
    //             console.log(data)
    //         }, 1000)
    //     })

    new Promise((res, rej) => {
        let obj = {
        name: 'Ann'
        }
        setTimeout(() => {
            res(obj)
            console.log()
            console.log(obj)
        }, 2000)
    })
        .then((data: any) => {
           return new Promise((res, rej) => {
                setTimeout(() => {
                    data.age = 25
                   res (data)
                    console.log(data)
                }, 1000)
            })
        })
        .then((data: any) => {
           return new Promise((res, rej) => {
                setTimeout(() => {
                    data.cyty = "25"
                    res (data)
                    console.log(data)
                }, 1000)
            })
        })
        .then((data: any) => {
            setTimeout(() => {
                console.log(data)
            }, 1000)
        })


    return (
        <div>
            <button onClick={createPromise6} id="btn-create-promise">Create Promise</button>
            <button onClick={onClicResolvePromise5} id="btn-resolve-promise">Resolve Promise</button>
            <button onClick={onClicRejectPromise5} id="btn-reject-promise">Reject Promise</button>
        </div>
    );
}

export default Lesson4;