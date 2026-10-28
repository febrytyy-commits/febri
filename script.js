
const nomorWhatsApp = "6285742322215";

function pesan(namaProduk) {
  const pesan = `Halo, saya ingin memesan ${namaProduk}.`;
  const link = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesan)}`;
  window.open(link, "_blank");
}

function hubungiAdmin() {
  const pesan = "Halo, saya ingin bertanya tentang produk Febri Beads.";
  const link = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesan)}`;
  window.open(link, "_blank");
}
