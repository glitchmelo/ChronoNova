import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

/**
 * Export timeline as PNG image using html2canvas
 */
export async function exportToPNG() {
  try {
    const element = document.querySelector('[data-export="timeline"]')
    if (!element) {
      alert('Impossible de trouver la frise à exporter')
      return
    }

    const canvas = await html2canvas(element, {
      backgroundColor: '#ffffff',
      scale: 2,
      useCORS: true,
      logging: false,
    })

    const link = document.createElement('a')
    link.href = canvas.toDataURL('image/png')
    link.download = `chronova-${new Date().toISOString().split('T')[0]}.png`
    link.click()
  } catch (err) {
    console.error('Erreur lors de l\'export PNG:', err)
    alert('Erreur lors de l\'export en image')
  }
}

/**
 * Export timeline as PDF using jsPDF
 */
export async function exportToPDF() {
  try {
    const element = document.querySelector('[data-export="timeline"]')
    if (!element) {
      alert('Impossible de trouver la frise à exporter')
      return
    }

    const canvas = await html2canvas(element, {
      backgroundColor: '#ffffff',
      scale: 2,
      useCORS: true,
      logging: false,
    })

    const imgData = canvas.toDataURL('image/png')
    const imgWidth = 210 // A4 width in mm
    const pageHeight = 297 // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width
    let heightLeft = imgHeight

    const pdf = new jsPDF('p', 'mm', 'a4')
    let position = 0

    // Add image to PDF, handling multiple pages if needed
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
    heightLeft -= pageHeight

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight
      pdf.addPage()
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
      heightLeft -= pageHeight
    }

    pdf.save(`chronova-${new Date().toISOString().split('T')[0]}.pdf`)
  } catch (err) {
    console.error('Erreur lors de l\'export PDF:', err)
    alert('Erreur lors de l\'export en PDF')
  }
}