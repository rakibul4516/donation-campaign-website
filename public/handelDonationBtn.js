const handelDonationBtn = (post) => {
    let addDonation = [];
    console.log(post)
    const getDonationItem = JSON.parse(localStorage.getItem('donated_item'));
    if (!getDonationItem) {
        addDonation.push(post);
        localStorage.setItem('donated_item', JSON.stringify(addDonation))
        alert('succefully added')
    } else {
        const exist = getDonationItem.find((data)=>data.id === post.id);
        if (!exist) {
            addDonation.push(...getDonationItem, post);
            localStorage.setItem('donated_item', JSON.stringify(addDonation))
            alert('added succesfully')
        }else{
            alert('exist')
        }
    }
}
export default handelDonationBtn