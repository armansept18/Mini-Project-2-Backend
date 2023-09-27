const multer = require("multer");
const express = require("express");
const moment = require("moment");
const uploadFile = ({ destinationFolder = "", prefix = "", filetype = "" }) => {
  const storageConfig = multer.diskStorage({
    destination: (req, res, cb) => {
      cb(null, `${__dirname}/../public/images/${destinationFolder}`);
    },
    filename: (req, file, cb) => {
      const fileExtention = file.mimetype.split("/")[1];
      const filename = `${prefix}_${moment().format(
        "YYYY-MM-DD-hh-mm-ss"
      )}.${fileExtention}`;
      console.log(filename);
      cb(null, filename);
    },
  });
  const uploader = multer({
    storage: storageConfig,
    fileFilter: (req, file, cb) => {
      if (file.mimetype.split("/")[0] != filetype) {
        return cb(null, false);
      }
      return cb(null, true);
    },
    limits: 10000000,
  });
  return uploader;
};

module.exports = uploadFile;
