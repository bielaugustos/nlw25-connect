interface Buttonprops {
    text?: string
}

export function Button(props: Buttonprops ) {
    // biome-ignore lint/a11y/useButtonType: <explanation>
    return  <button className="bg-violet-500 px-5 py-2 rounded-sm">
        {props.text || 'Enviar'}
        </button>
}