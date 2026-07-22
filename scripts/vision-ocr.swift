import AppKit
import Foundation
import Vision

guard CommandLine.arguments.count == 2 else {
  fputs("usage: swift vision-ocr.swift <image>\n", stderr)
  exit(2)
}

let imageURL = URL(fileURLWithPath: CommandLine.arguments[1])
guard
  let image = NSImage(contentsOf: imageURL),
  let cgImage = image.cgImage(forProposedRect: nil, context: nil, hints: nil)
else {
  fputs("failed to open image\n", stderr)
  exit(1)
}

let request = VNRecognizeTextRequest()
request.recognitionLevel = .accurate
request.recognitionLanguages = ["zh-Hans", "en-US"]
request.usesLanguageCorrection = true

try VNImageRequestHandler(cgImage: cgImage).perform([request])

let observations = (request.results ?? []).sorted { lhs, rhs in
  let verticalGap = abs(lhs.boundingBox.midY - rhs.boundingBox.midY)
  if verticalGap > 0.008 { return lhs.boundingBox.midY > rhs.boundingBox.midY }
  return lhs.boundingBox.minX < rhs.boundingBox.minX
}

for observation in observations {
  guard let candidate = observation.topCandidates(1).first else { continue }
  let box = observation.boundingBox
  print(String(format: "%.5f\t%.5f\t%.5f\t%.5f\t%@", box.minX, box.minY, box.width, box.height, candidate.string))
}
