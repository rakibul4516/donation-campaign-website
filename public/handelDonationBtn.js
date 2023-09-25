import swal from 'sweetalert';
const handelDonationBtn = (post) => {
    let addDonation = [];
    console.log(post)
    const getDonationItem = JSON.parse(localStorage.getItem('donated_item'));
    if (!getDonationItem) {
        addDonation.push(post);
        localStorage.setItem('donated_item', JSON.stringify(addDonation))
        swal("Done!", "Added successfully", "success");
    } else {
        const exist = getDonationItem.find((data) => data.id === post.id);
        if (!exist) {
            addDonation.push(...getDonationItem, post);
            localStorage.setItem('donated_item', JSON.stringify(addDonation))
            swal("Done!", "Added successfully", "success");
        } else {
            swal("Exist!", "Already added", "error");
        }
    }
}
export default handelDonationBtn