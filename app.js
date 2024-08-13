const token="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"
const submit=document.querySelector("#submit-icon")
const input=document.querySelector("#input")
const button=document.querySelector(".button-64")
const image=document.getElementById('getimg')


async function query() {
	image.src="/loding.gif"
	const response = await fetch(
		"https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image",
		{
			headers: {Authorization: `Bearer ${token}`},
			method: "POST",
			body: JSON.stringify(input.value),
		}
	);
	const result = await response.blob();
	return result;
}
button.addEventListener('click',async function() {
    query().then((response) => {
        const objecturl=URL.createObjectURL(response)
        image.src=objecturl
    }); 
})

input.addEventListener("keypress", async function(event) {
	if (event.key === "Enter") {
    query().then((response) => {
        const objecturl=URL.createObjectURL(response)
        image.src=objecturl
    });}
})
