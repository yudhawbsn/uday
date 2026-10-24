CARA PASANG DI VERCEL (gratis)
1. Upload folder ini ke GitHub, lalu "Import" di vercel.com (atau jalankan: npx vercel).
2. Di dashboard Vercel > Storage / Marketplace, tambahkan "Upstash Redis" dan hubungkan ke project.
   (Ini otomatis mengisi UPSTASH_REDIS_REST_URL dan UPSTASH_REDIS_REST_TOKEN.
    Jika nama variabelnya KV_REST_API_URL / KV_REST_API_TOKEN, buat variabel baru dengan nama di atas berisi nilai yang sama.)
3. Settings > Environment Variables: tambah EDIT_PASSWORD = password pilihanmu.
4. Redeploy.

PAKAI
- Penerima: buka https://DOMAINMU.vercel.app  (hanya melihat).
- Kamu (edit): buka https://DOMAINMU.vercel.app/#edit, masukkan password.
  Tombol ⚙ (edit teks & foto) dan 🔗 Bagikan (link + QR) akan muncul.
- Tekan "Simpan & terapkan" agar perubahan tersimpan untuk semua penerima.
