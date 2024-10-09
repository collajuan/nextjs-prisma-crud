import { NextResponse } from 'next/server'
import { prisma } from '@/libs/prisma'

export async function GET(request, {params}) {
    const task = await prisma.task.findUnique({
        where: {
            id: Number(params.id)
        }
    })
    return NextResponse.json(task)
}

export function PUT(request, {params}) {
    return NextResponse.json('actualizando tarea ' + params.id)
}

export function DELETE(request, {params}) {
    return NextResponse.json('eliminando tarea ' + params.id)
}